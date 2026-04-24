"use client";

import { forwardRef, useMemo, useState } from "react";

const COUNTRY_OPTIONS = [
  { label: "Brasil", code: "BR", ddi: "55", flag: "\uD83C\uDDE7\uD83C\uDDF7" },
  { label: "Estados Unidos", code: "US", ddi: "1", flag: "\uD83C\uDDFA\uD83C\uDDF8" },
  { label: "Portugal", code: "PT", ddi: "351", flag: "\uD83C\uDDF5\uD83C\uDDF9" },
  { label: "Argentina", code: "AR", ddi: "54", flag: "\uD83C\uDDE6\uD83C\uDDF7" },
  { label: "Chile", code: "CL", ddi: "56", flag: "\uD83C\uDDE8\uD83C\uDDF1" },
  { label: "Uruguai", code: "UY", ddi: "598", flag: "\uD83C\uDDFA\uD83C\uDDFE" },
  { label: "Paraguai", code: "PY", ddi: "595", flag: "\uD83C\uDDF5\uD83C\uDDFE" },
  { label: "Bolivia", code: "BO", ddi: "591", flag: "\uD83C\uDDE7\uD83C\uDDF4" },
  { label: "Colombia", code: "CO", ddi: "57", flag: "\uD83C\uDDE8\uD83C\uDDF4" },
  { label: "Peru", code: "PE", ddi: "51", flag: "\uD83C\uDDF5\uD83C\uDDEA" },
];

const DEFAULT_COUNTRY_OPTION = COUNTRY_OPTIONS[0];
const MAX_PHONE_DIGITS = 15;

const onlyDigits = (value = "") => String(value ?? "").replace(/\D/g, "");

function getCountryByDdi(ddi = DEFAULT_COUNTRY_OPTION.ddi) {
  return COUNTRY_OPTIONS.find((country) => country.ddi === String(ddi)) || DEFAULT_COUNTRY_OPTION;
}

function normalizeInputClassName(className = "") {
  return String(className).replace(/rounded-(lg|xl|2xl|3xl|full|md|sm)/g, "").trim();
}

function buildSelectClassName(className = "") {
  const classList = String(className).split(/\s+/).filter(Boolean);
  const usefulClasses = classList.filter((item) => (
    item.startsWith("border") ||
    item.startsWith("bg-") ||
    item.startsWith("text-") ||
    item.startsWith("placeholder:") ||
    item.startsWith("focus:") ||
    item.startsWith("ring") ||
    item.startsWith("shadow") ||
    item.startsWith("h-") ||
    item.startsWith("min-h-")
  ));

  return usefulClasses.join(" ");
}

function getLocalPhoneDigits(value, countryOrDdi = DEFAULT_COUNTRY_OPTION) {
  const country = typeof countryOrDdi === "string" ? getCountryByDdi(countryOrDdi) : countryOrDdi;
  const ddi = onlyDigits(country?.ddi || DEFAULT_COUNTRY_OPTION.ddi);
  const digits = onlyDigits(value);
  const local = digits.startsWith(ddi) && digits.length > ddi.length ? digits.slice(ddi.length) : digits;
  return local.slice(0, Math.max(0, MAX_PHONE_DIGITS - ddi.length));
}

function maskLocalPhone(value, countryOrDdi = DEFAULT_COUNTRY_OPTION) {
  const country = typeof countryOrDdi === "string" ? getCountryByDdi(countryOrDdi) : countryOrDdi;
  const ddi = onlyDigits(country?.ddi || DEFAULT_COUNTRY_OPTION.ddi);
  const local = getLocalPhoneDigits(value, country);

  if (!local) return "";
  if (ddi !== "55") return local.replace(/(\d{1,3})(?=\d)/g, "$1 ").trim();
  if (local.length <= 2) return `(${local}`;

  const ddd = local.slice(0, 2);
  const number = local.slice(2);
  if (!number) return `(${ddd})`;
  if (number.length <= 4) return `(${ddd}) ${number}`;
  if (number.length <= 8) return `(${ddd}) ${number.slice(0, 4)}-${number.slice(4)}`;
  return `(${ddd}) ${number.slice(0, 5)}-${number.slice(5)}`;
}

function clonePhoneEvent(event, value) {
  return {
    ...event,
    target: { ...event.target, value },
    currentTarget: { ...event.currentTarget, value },
  };
}

function buildFinalPhone(localValue, ddi) {
  const maxLocalDigits = Math.max(0, MAX_PHONE_DIGITS - String(ddi).length);
  const localDigits = onlyDigits(localValue).slice(0, maxLocalDigits);
  return `${ddi}${localDigits}`;
}

export const PhoneInputWithDdi = forwardRef(function PhoneInputWithDdi(
  {
    className = "",
    wrapperClassName = "",
    type = "tel",
    inputMode = "numeric",
    autoComplete = "tel",
    value,
    defaultValue,
    onChange,
    ...props
  },
  ref,
) {
  const [selectedDdi, setSelectedDdi] = useState(DEFAULT_COUNTRY_OPTION.ddi);
  const selectedCountry = useMemo(() => getCountryByDdi(selectedDdi), [selectedDdi]);
  const [localValue, setLocalValue] = useState(() => maskLocalPhone(value ?? defaultValue ?? "", selectedCountry));
  const inputClassName = normalizeInputClassName(className);
  const selectClassName = buildSelectClassName(className);

  const emitPhoneChange = (event, ddi = selectedCountry.ddi) => {
    const maxLocalDigits = Math.max(0, MAX_PHONE_DIGITS - String(ddi).length);
    const localDigits = onlyDigits(event.target.value).slice(0, maxLocalDigits);
    const display = maskLocalPhone(localDigits, ddi);
    setLocalValue(display);
    if (typeof onChange === "function") onChange(clonePhoneEvent(event, buildFinalPhone(localDigits, ddi)));
  };

  const handleCountryChange = (event) => {
    const nextDdi = event.target.value;
    const currentLocalDigits = getLocalPhoneDigits(localValue, selectedCountry);
    const nextLocalDigits = currentLocalDigits.slice(0, Math.max(0, MAX_PHONE_DIGITS - nextDdi.length));
    setSelectedDdi(nextDdi);
    setLocalValue(maskLocalPhone(nextLocalDigits, nextDdi));
    if (typeof onChange === "function") onChange(clonePhoneEvent(event, buildFinalPhone(nextLocalDigits, nextDdi)));
  };

  return (
    <div className={`flex w-full items-stretch ${wrapperClassName}`}>
      <select
        aria-label="DDI do telefone"
        value={selectedDdi}
        onChange={handleCountryChange}
        className={`shrink-0 rounded-l-xl border-r-0 pl-10 pr-3 text-sm font-semibold outline-none transition-all duration-200 ease-[cubic-bezier(.4,0,.2,1)] ${selectClassName}`}
      >
        {COUNTRY_OPTIONS.map((country) => (
          <option key={country.code} value={country.ddi}>
            {country.flag} +{country.ddi}
          </option>
        ))}
      </select>
      <input
        {...props}
        ref={ref}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={localValue}
        onChange={emitPhoneChange}
        className={`min-w-0 flex-1 rounded-l-none ${inputClassName}`}
      />
    </div>
  );
});
