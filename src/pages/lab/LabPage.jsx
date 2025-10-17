import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { labsData } from '../../data/labsData';

export default function LabPage() {
  const { labId } = useParams();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const labInfo = labsData[labId]?.[currentLanguage];

  if (!labInfo) {
    return <div className="container mx-auto px-4 pt-20">Laboratory not found</div>;
  }

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-[#00814b] to-green-600 bg-clip-text text-transparent mb-14">{labInfo.name}</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <InfoSection title={t('labs.schedule')} content={labInfo.schedule} />
            <InfoSection title={t('labs.phone')} content={labInfo.phone} />
          </div>
          <div className="space-y-4">
            <InfoSection title={t('labs.equipment')} content={labInfo.equipment} />
            <InfoSection title={t('labs.purpose')} content={labInfo.purpose} />
            <InfoSection title={t('labs.ubi')} content={labInfo.ubi} />
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoSection = ({ title, content }) => (
  <div className="border-l-4 border-green-600 pl-4">
    <h2 className="text-xl font-semibold text-green-700">{title}</h2>
    <p className="mt-2 text-gray-600">{content}</p>
  </div>
);