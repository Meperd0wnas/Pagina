
import React from "react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation(); // hook de i18next

  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {t("homepage.welcome")}
        </h2>
        <p className="text-lg text-gray-600">
          {t("homepage.description")}
        </p>
      </div>
    </main>
  );
}
