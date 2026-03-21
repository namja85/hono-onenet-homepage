import Container from "@/components/Container";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

export default function Inquiry() {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10 md:py-40">
        <PageTitle
          title="고객 문의"
          description="문의사항이 있으신가요? 빠르고 명확한 답변으로 여러분을 지원합니다."
        />
      </section>

      <section class="my-20 md:my-40 p-4">
        <Container>
          <h2 class="text-2xl/10 md:text-4xl/20">
            원넷에게 <span class="text-blue-900 font-bold">문의합니다.</span>
          </h2>

          <form class="space-y-4">
            <div class="flex flex-col border border-neutral-200 rounded-xl p-4">
              <div class="flex flex-col md:flex-row gap-2 md:gap-4 py-2">
                <div class="w-full md:w-48 bg-neutral-200 rounded-md p-2 flex justify-center">
                  <label
                    for="name"
                    class="text-base/6 md:text-xl text-neutral-600 font-bold"
                  >
                    이름 (법인명)
                  </label>
                </div>
                <div class="flex-1">
                  <input
                    type="text"
                    id="name"
                    class="w-full p-2 rounded-md border border-neutral-400"
                    placeholder="이름 (법인명)을 입력해주세요."
                  />
                </div>
              </div>
              <div class="flex flex-col md:flex-row gap-2 md:gap-4 py-2">
                <div class="w-full md:w-48 bg-neutral-200 rounded-md p-2 flex justify-center">
                  <label
                    for="phone"
                    class="text-base/6 md:text-xl text-neutral-600 font-bold"
                  >
                    연락처
                  </label>
                </div>
                <div class="flex-1">
                  <input
                    type="text"
                    id="phone"
                    class="w-full p-2 rounded-md border border-neutral-400"
                    placeholder="연락처를 입력해주세요."
                  />
                </div>
              </div>
              <div class="flex flex-col md:flex-row gap-2 md:gap-4 py-2">
                <div class="w-full md:w-48 bg-neutral-200 rounded-md p-2 flex justify-center">
                  <label
                    for="email"
                    class="text-base/6 md:text-xl text-neutral-600 font-bold"
                  >
                    이메일
                  </label>
                </div>
                <div class="flex-1">
                  <input
                    type="text"
                    id="email"
                    class="w-full p-2 rounded-md border border-neutral-400"
                    placeholder="이메일을 입력해주세요."
                  />
                </div>
              </div>
              <div class="flex flex-col md:flex-row gap-2 md:gap-4 py-2">
                <div class="w-full md:w-48 bg-neutral-200 rounded-md p-2 flex justify-center">
                  <label
                    for="message"
                    class="text-base/6 md:text-xl text-neutral-600 font-bold"
                  >
                    문의내용
                  </label>
                </div>
                <div class="flex-1">
                  <textarea
                    id="message"
                    class="w-full p-2 rounded-md border border-neutral-400 min-h-32 md:min-h-60"
                    placeholder="문의내용을 입력해주세요."
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="flex justify-center">
              <button
                type="submit"
                class="bg-blue-900 text-white px-4 py-2 w-full md:w-40 rounded-md"
              >
                문의하기
              </button>
            </div>
          </form>
        </Container>
      </section>
    </Layout>
  );
}
