import { useTranslation } from "react-i18next";

type ChildProps = {
  onSendData: (data: string) => void;
};

function Child({ onSendData }: ChildProps) {
  const sendDataToParent = (color: string) => {
    const data = color;
    onSendData(data); // call parent function with data
  };

  const { t } = useTranslation();

  return (
    <div>
      <h3>{t('childColor.title')}</h3>
      <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 w-full" type="text" onChange={(e) => sendDataToParent(e.target.value)} placeholder={t('childColor.colorPlaceholder')} />
    </div>
  );
}

export default Child;