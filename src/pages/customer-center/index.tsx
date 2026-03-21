import Container from "@/components/Container";
import Layout from "@/components/Layout";
import List from "@/components/List";
import ListItem from "@/components/ListItem";
import PageTitle from "@/components/PageTitle";

export default function CustomerCenter() {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10 md:py-40">
        <PageTitle
          title="고객 센터"
          description="안정적인 서비스 이용을 위한 필수 정보가 여기에 있습니다."
        />
      </section>

      <section class="my-20 md:my-40 p-4">
        <Container>
          <h2 class="text-2xl/10 md:text-4xl/20">
            원넷이 <span class="text-blue-900 font-bold">알립니다.</span>
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
