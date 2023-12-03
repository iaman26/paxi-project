<template>
  <main class="flex flex-col bg-white">
    <section
      class="flex w-full flex-col items-center self-stretch bg-red-200 px-[5%] pb-8 pt-12 max-md:max-w-full lg:px-[10%]"
    >
      <div
        class="mt-12 flex w-full flex-col items-stretch max-md:mt-10 max-md:max-w-full"
      >
        <div class="max-md:max-w-full">
          <div
            class="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0"
          >
            <div class="flex flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div
                class="mt-14 flex flex-col items-start max-md:mt-10 max-md:max-w-full"
              >
                <div
                  class="flex h-6 w-6 shrink-0 flex-col bg-white bg-opacity-10"
                ></div>
                <h1
                  class="mt-9 self-stretch text-6xl font-semibold leading-[68px] text-white max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"
                >
                  Transform Your Idea Into Reality with Finsweet
                </h1>
                <p
                  class="mt-11 self-stretch text-base leading-6 text-white max-md:mt-10 max-md:max-w-full"
                >
                  The entire Finsweet team knows what's good with Webflow and
                  you can too with 1 week and a good attitude.
                </p>
                <div
                  class="mt-9 flex items-start gap-1 bg-indigo-600 pb-6 pr-8 max-md:justify-center max-md:pr-5"
                >
                  <a
                    href="#"
                    class="aspect-square w-7 max-w-full shrink-0 overflow-hidden object-contain object-center"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dd3370a1c90511f80479e4e705c76e2ee61199191b30d92ab0bd656d61396c8?apiKey=d6a60cb2df8942a288161fb20fcb2421&"
                      alt="Request Quote"
                    />
                  </a>
                  <div class="mt-7 text-base font-medium leading-6 text-white">
                    Request Quote
                  </div>
                  <a href="#">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/55270d870e8afa95c105516d0458741e32f9aa074794c42f612cccc9fa7f8b1d?apiKey=d6a60cb2df8942a288161fb20fcb2421&"
                      alt=""
                      class="my-auto aspect-[2.63] w-[21px] max-w-full shrink-0 self-center overflow-hidden stroke-white stroke-[1px] object-contain object-center"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="flex justify-end pl-5 max-md:ml-0 max-md:w-full">
              <UiImage
                src="assets/images/image-1.png"
                w="1"
                h="1"
                alt="Image 1"
                class="w-full grow overflow-hidden object-contain object-center max-md:mt-10 max-md:max-w-full"
                preload
              ></UiImage>
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap"
        >
          <div class="flex flex-col">
            <div
              class="whitespace-nowrap text-sm font-medium leading-5 text-white opacity-60"
            >
              Our Clients
            </div>
            <div class="mt-3.5 text-lg font-medium leading-7 text-white">
              We've Worked with
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
