<template>
  <div class="story-container">
    <DvHeading as="h2">Long-Form Reading</DvHeading>

    <DvBody lead>
      Discover how exceptional design combines aesthetics with functionality to create meaningful user
      experiences.
    </DvBody>

    <DvBody>
      Effective typography forms the foundation of every digital interface. It guides users through content,
      establishes visual hierarchy, and ensures readability across all devices. When carefully crafted, typography
      becomes invisible—users consume content without thinking about the mechanics of reading.
    </DvBody>

    <DvBody>
      The DvBody component provides a semantic, accessible way to present standard body copy. It respects the
      design token system, ensuring consistency across your entire application. Whether you're building
      documentation, articles, or UI descriptions, DvBody maintains optimal readability through tested line
      heights, font sizes, and spacing.
    </DvBody>

    <DvBody>
      Consider these principles when working with body text: prioritize clarity over cleverness, respect the
      reader's cognitive load, and use visual hierarchy to guide attention. These practices ensure your content
      serves users effectively.
    </DvBody>
  </div>
</template>

<script setup lang="ts">
import DvBody from "../DvBody.vue";
import DvHeading from "../../DvHeading/DvHeading.vue";
</script>

<style scoped>
.story-container {
  max-width: 70ch;
  margin: 0 auto;
}
</style>
