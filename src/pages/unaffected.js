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

export default function Static({ locale }) {
  return <div>Locale: {locale}, this route is not matched by the middleware so the locale is correct even after page reload</div>;
}
