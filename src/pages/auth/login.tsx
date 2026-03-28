import Container from "@/components/Container";
import ArrowLeft from "@/components/icons/ArrowLeft";
import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import PageTitle from "@/components/PageTitle";

export default function AuthLogin({ flash }: { flash?: string }) {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10 md:py-20">
        <PageTitle
          title="관리자 로그인"
          description="관리자 계정으로 로그인하여 콘텐츠를 관리합니다."
        />
      </section>

      <section class="my-10 md:my-20 p-4">
        <Container>
          <div class="bg-neutral-100 rounded-xl p-4 md:p-6 max-w-lg mx-auto">
            <h2 class="text-2xl/10 md:text-4xl/20 mb-6">
              <span class="text-blue-900 font-bold">로그인</span>
            </h2>

            {flash ? (
              <div
                role="alert"
                class="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800"
              >
                {flash}
              </div>
            ) : null}

            <form action="/auth/login" method="post" class="space-y-4">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-neutral-700 mb-1.5"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autocomplete="email"
                  required
                  class="w-full p-2 rounded-md border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:border-blue-900 bg-white"
                  placeholder="이메일을 입력해주세요."
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-neutral-700 mb-1.5"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autocomplete="current-password"
                  required
                  class="w-full p-2 rounded-md border border-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:border-blue-900 bg-white"
                  placeholder="비밀번호를 입력해주세요."
                />
              </div>
              <div class="flex justify-end pt-2">
                <button
                  type="submit"
                  class="bg-blue-900 text-white px-4 py-2.5 w-full md:w-40 rounded-md text-base/6 font-medium hover:bg-blue-950 transition-colors"
                >
                  로그인
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
