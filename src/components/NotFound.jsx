import { useTranslation } from "react-i18next";
import { Player } from '@lottiefiles/react-lottie-player';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src="https://assets8.lottiefiles.com/temp/lf20_dzWAyu.json"
        alt="not found animation"
        >
        </Player>
      <div className="text-center mb-4">{t("notfound")}</div>
    </section>
  );
};

export default NotFound;