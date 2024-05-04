import { fetchSearchResults } from "@/api";
import SubLayout from "@/components/SubLayout";

export default function Search({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

Search.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  const { q } = context.query;
  let countries = [];
  if (q) {
    countries = await fetchSearchResults(q);
  }

  return {
    props: { countries },
  };
};
