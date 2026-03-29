"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";

const COOKIE_CONSENT_KEY = "foamix_cookie_consent";
const COOKIE_EVENT = "foamix-cookie-consent-change";

function getConsentSnapshot() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(COOKIE_CONSENT_KEY);
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const handleChange = () => onStoreChange();

  window.addEventListener("storage", handleChange);
  window.addEventListener(COOKIE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(COOKIE_EVENT, handleChange);
  };
}

export default function Cookies() {
  const consent = useSyncExternalStore(
    subscribe,
    getConsentSnapshot,
    () => null,
  );

  useEffect(() => {
    if (consent === "accepted") {
      enableAnalytics();
    }

    if (consent === "rejected") {
      disableAnalytics();
    }
  }, [consent]);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    window.dispatchEvent(new Event(COOKIE_EVENT));
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    window.dispatchEvent(new Event(COOKIE_EVENT));
  };

  if (consent) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-6 pb-6">
      <div className="pointer-events-auto ml-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        <p className="text-sm/6 text-gray-900">
          Ми використовуємо необхідні cookie для роботи сайту, а також, за вашою
          згодою, аналітичні cookie для покращення сервісу. Ви можете прийняти
          або відхилити необов’язкові cookie. Детальніше — у{" "}
          <Link
            href="/cookies"
            className="font-semibold text-[#00a0e3] hover:text-[#0c91c9]"
          >
            політиці cookie
          </Link>
          .
        </p>

        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-md bg-[#00a0e3] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0c91c9]"
          >
            Прийняти
          </button>

          <button
            type="button"
            onClick={handleReject}
            className="text-sm font-semibold text-gray-900 transition hover:text-gray-700"
          >
            Відхилити
          </button>
        </div>
      </div>
    </div>
  );
}

function enableAnalytics() {
  console.log("Cookies accepted: analytics enabled");
}

function disableAnalytics() {
  console.log("Cookies rejected: analytics disabled");
}
