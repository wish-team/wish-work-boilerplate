import React from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from '@mui/material';
import { useTranslation } from "next-i18next";
import { useAppContext } from '../context/state';
import i18nConfig from "../i18n";

type Theme = {
  mode: "dark" | "light"
}

const Index = () => {
  const { t, i18n } = useTranslation("common");
  const { mode, setTheme } = useAppContext();

  const themeChanger = () => {
    setTheme(mode === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
      <h1>{t("title.head")}</h1>
      <Button variant="contained">Submit</Button>
      <Button variant="outlined" onClick={themeChanger}>Theme</Button>
    </div>
  )
}

export const getStaticProps = async ({ locale }: HomeProps) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale, ["common"], i18nConfig)),
  },
});

export default Index 