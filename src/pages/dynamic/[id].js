export const config = {
  runtime: 'experimental-edge',
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};

export default function Dynamic({ locale }) {
  return <div>Locale: {locale}, reload and the locale will always be 'default'</div>;
}
