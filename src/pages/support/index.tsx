import Container from "@/components/Container";
import Layout from "@/components/Layout";
import List from "@/components/List";
import ListItem from "@/components/ListItem";
import PageTitle from "@/components/PageTitle";

export default function Support() {
  return (
    <Layout>
      <section class="bg-neutral-800 py-40">
        <PageTitle
          title="기술 지원"
          description="지금 바로 필요한 자료를 찾아보세요. 원넷 자료실에서 해답을 발견하실 수 있습니다."
        />
      </section>

      <section class="my-40">
        <Container>
          <h2 class="text-4xl/20">
            원넷의 <span class="text-blue-900 font-bold">자료실</span>
          </h2>
          <List>
            <ListItem
              type="download"
              title="원넷페이_전자지불계약서 양식"
              date="2026-03-21"
            />
            <ListItem
              type="download"
              title="원넷페이_전자지불계약서 양식"
              date="2026-03-21"
            />
            <ListItem
              type="notice"
              title="원넷페이_전자지불계약서 양식"
              date="2026-03-21"
            />
          </List>
        </Container>
      </section>
    </Layout>
  );
}
