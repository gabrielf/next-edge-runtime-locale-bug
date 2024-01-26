import Link from "next/link";

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

export default function Home({ locale }) {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <p>Current locale: {locale}, reload and the locale will always be 'default'</p>
      Locale switch:
      <Link href="/" locale="default">
        Default
      </Link>
      <Link href="/" locale="en">
        English
      </Link>
      <Link href="/" locale="de">
        German
      </Link>
      <br />
      Test links:
      <Link href="/dynamic/1">Dynamic route 1</Link>
      <Link href="/static">Static route</Link>
      <Link href="/unaffected">Static route (unaffected)</Link>
    </main>
  );
}
