<script setup lang="ts">
import { initTabs } from 'flowbite'

const currentTab = ref(0)
const tabs = ['details', 'requirements', 'responsibilities']

onMounted(() => {
  initTabs()
})
</script>

<template>
  <section
    class="flex w-full flex-col items-center justify-center self-stretch px-[5%] py-12 max-md:max-w-full lg:px-[10%]"
  >
    <div class="w-full bg-[#ECF8F9] py-5 lg:py-16">
      <div class="relative flex justify-center">
        <ul
          id="default-tab"
          class="flex w-1/2 justify-around"
          data-tabs-toggle="#details-tab-content"
          role="tablist"
        >
          <li v-for="(tab, index) in tabs" :key="index" role="presentation">
            <button
              :id="`${tab}-tab`"
              class="pb-8 text-2xl font-semibold leading-9"
              :class="{
                'text-indigo-600': index === currentTab,
                'relative z-10 border-b-4 border-b-indigo-600':
                  index === currentTab,
                'text-black': index !== currentTab,
              }"
              :data-tabs-target="`#${tab}`"
              type="button"
              role="tab"
              :aria-controls="`${tab}`"
              :aria-selected="index === currentTab"
              @click="currentTab = index"
            >
              {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
            </button>
          </li>
        </ul>
        <div
          class="absolute bottom-0 w-full border-b-4 border-b-[#E0F1F2]"
        ></div>
      </div>
      <div id="details-tab-content" class="mx-auto w-8/12 py-24">
        <div
          id="details"
          class=""
          role="tabpanel"
          aria-labelledby="details-tab"
        >
          <div
            class="self-stretch text-base leading-6 text-black max-md:max-w-full"
          >
            <p>
              Create and edit video content for multi-platform use and
              distribution for social media channels (Facebook, Youtube,
              Instagram, Snapchat, IGTV, Facebook Stories and Instagram
              Stories).
            </p>
            <p>
              Design & Create highly engaging industry-related content in both
              photo, gif & video format
            </p>
            <p>Publish Posts on various social media channels</p>
            <p>
              Promote content on social networks and monitor engagement (e.g.
              comments and shares)
            </p>
            <p>Research industry-related topics</p>
            <p>Editing audio and sound design on projects</p>
            <p>
              Engage in opportunities to develop original content and concepts
              for web and mobile
            </p>
            <p>
              Create motion graphics and animations using 2D and 3D applications
              for marketing and promotional usage.
            </p>
            <p>
              Manage the day-to-day handling of all social media channels such
              as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and
              YouTube, adapting content to suit different channels
            </p>
          </div>
        </div>
        <div
          id="requirements"
          class="hidden"
          role="tabpanel"
          aria-labelledby="requirements-tab"
        >
          <div
            class="self-stretch text-base leading-6 text-black max-md:max-w-full"
          >
            <p>
              Create and edit video content for multi-platform use and
              distribution for social media channels (Facebook, Youtube,
              Instagram, Snapchat, IGTV, Facebook Stories and Instagram
              Stories).
            </p>
            <p>
              Design & Create highly engaging industry-related content in both
              photo, gif & video format
            </p>
            <p>Publish Posts on various social media channels</p>
            <p>
              Promote content on social networks and monitor engagement (e.g.
              comments and shares)
            </p>
            <p>Research industry-related topics</p>
            <p>Editing audio and sound design on projects</p>
            <p>
              Engage in opportunities to develop original content and concepts
              for web and mobile
            </p>
            <p>
              Create motion graphics and animations using 2D and 3D applications
              for marketing and promotional usage.
            </p>
            <p>
              Manage the day-to-day handling of all social media channels such
              as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and
              YouTube, adapting content to suit different channels
            </p>
          </div>
        </div>
        <div
          id="responsibilities"
          class=""
          role="tabpanel"
          aria-labelledby="responsibilities-tab"
        >
          <div
            class="self-stretch text-base leading-6 text-black max-md:max-w-full"
          >
            <p>
              Create and edit video content for multi-platform use and
              distribution for social media channels (Facebook, Youtube,
              Instagram, Snapchat, IGTV, Facebook Stories and Instagram
              Stories).
            </p>
            <p>
              Design & Create highly engaging industry-related content in both
              photo, gif & video format
            </p>
            <p>Publish Posts on various social media channels</p>
            <p>
              Promote content on social networks and monitor engagement (e.g.
              comments and shares)
            </p>
            <p>Research industry-related topics</p>
            <p>Editing audio and sound design on projects</p>
            <p>
              Engage in opportunities to develop original content and concepts
              for web and mobile
            </p>
            <p>
              Create motion graphics and animations using 2D and 3D applications
              for marketing and promotional usage.
            </p>
            <p>
              Manage the day-to-day handling of all social media channels such
              as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and
              YouTube, adapting content to suit different channels
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
