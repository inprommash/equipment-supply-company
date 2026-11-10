import { useRef, useState, type FormEvent } from 'react'
import { content, enquiryForm, type Lang, type SectorId } from '../data/content'

type Status = 'idle' | 'pending' | 'success' | 'error'

export function QuoteForm({
  lang,
  sector,
  onSectorChange,
}: {
  lang: Lang
  sector: SectorId | 'other' | ''
  onSectorChange: (value: SectorId | 'other' | '') => void
}) {
  const t = content[lang].form
  const sectors = content[lang].sectors
  const [status, setStatus] = useState<Status>('idle')
  const busy = useRef(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (busy.current) return
    const form = event.currentTarget
    const body = new URLSearchParams()
    new FormData(form).forEach((value, key) => body.append(key, String(value)))
    busy.current = true
    setStatus('pending')
    try {
      const response = await fetch(enquiryForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text()))
        throw new Error('not accepted')
      form.reset()
      onSectorChange('')
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      busy.current = false
    }
  }

  const sectorTitle =
    sectors.find((s) => s.id === sector)?.title ??
    (sector === 'other' ? t.otherSector : '')

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex min-h-[420px] flex-col items-start justify-center rounded-lg bg-white p-8 sm:p-10"
      >
        <span className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-amber-brand text-2xl text-navy-950">
          ✓
        </span>
        <p className="font-display mb-6 text-xl font-semibold">{t.success}</p>
        <button
          type="button"
          className="font-semibold text-navy-700 underline underline-offset-4"
          onClick={() => setStatus('idle')}
        >
          {t.again}
        </button>
      </div>
    )
  }

  return (
    <form
      name={enquiryForm.name}
      method="POST"
      action={enquiryForm.endpoint}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      aria-busy={status === 'pending'}
      className="rounded-lg bg-white p-6 shadow-2xl shadow-navy-950/30 sm:p-10"
    >
      <input type="hidden" name="form-name" value={enquiryForm.name} />
      <input type="hidden" name="language" value={lang} />
      <input
        type="hidden"
        name="subject"
        value={`Запит / Request${sectorTitle ? ` — ${sectorTitle}` : ''}`}
      />
      <p hidden>
        <label>
          Leave this empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset
        disabled={status === 'pending'}
        className="grid gap-5 sm:grid-cols-2"
      >
        <div>
          <label htmlFor="q-company" className="form-label">
            {t.company} *
          </label>
          <input
            id="q-company"
            name="company"
            required
            maxLength={150}
            autoComplete="organization"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="q-name" className="form-label">
            {t.name} *
          </label>
          <input
            id="q-name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="q-phone" className="form-label">
            {t.phone} *
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            required
            maxLength={30}
            autoComplete="tel"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="q-email" className="form-label">
            {t.email} *
          </label>
          <input
            id="q-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className="form-input"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="q-sector" className="form-label">
            {t.sectorLabel}
          </label>
          <select
            id="q-sector"
            name="sector"
            value={sector}
            onChange={(e) =>
              onSectorChange(e.target.value as SectorId | 'other' | '')
            }
            className="form-input"
          >
            <option value="">{t.sectorPlaceholder}</option>
            {sectors.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">{t.otherSector}</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="q-message" className="form-label">
            {t.message} *
          </label>
          <textarea
            id="q-message"
            name="message"
            required
            minLength={10}
            maxLength={4000}
            rows={5}
            placeholder={t.messageHint}
            className="form-input"
          />
        </div>
        <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
          <button type="submit" className="btn-primary">
            {status === 'pending' ? t.sending : t.submit}
            <span aria-hidden>→</span>
          </button>
          <span className="text-sm text-steel-500">{t.responseNote}</span>
        </div>
      </fieldset>
      {status === 'error' && (
        <p role="alert" className="mt-5 rounded-md bg-red-50 p-4 text-red-800">
          {t.error}
        </p>
      )}
    </form>
  )
}
