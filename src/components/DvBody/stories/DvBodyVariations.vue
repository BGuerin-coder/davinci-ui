<template>
  <div class="stories-container">
    <div class="story-group">
      <DvHeading as="h3">Standard Body Text</DvHeading>
      <DvBody>
        This is standard body text using the default styling. Perfect for regular paragraphs, descriptions, and
        standard UI content.
      </DvBody>
    </div>

    <div class="story-group">
      <DvHeading as="h3">Lead Paragraph</DvHeading>
      <DvBody lead>
        This is a lead paragraph with increased emphasis through larger font size and looser line spacing. Use
        for opening text or important introductions.
      </DvBody>
    </div>

    <div class="story-group">
      <DvHeading as="h3">Multiple Paragraphs</DvHeading>
      <DvBody>
        First paragraph of content. This demonstrates how multiple body paragraphs work together with proper
        spacing and hierarchy.
      </DvBody>
      <DvBody>
        Second paragraph continues the narrative. Each paragraph is independently styled while maintaining
        visual consistency throughout the document.
      </DvBody>
      <DvBody>
        Third paragraph shows the rhythm and flow of extended text. The consistent styling and spacing create a
        cohesive reading experience.
      </DvBody>
    </div>

    <div class="story-group">
      <DvHeading as="h3">Semantic Variations</DvHeading>
      <DvBody as="div">
        This is rendered as a <code>&lt;div&gt;</code> element while maintaining body text styling. Useful when
        semantic structure requires a different element.
      </DvBody>
      <DvBody as="span">
        This is rendered as a <code>&lt;span&gt;</code> element. Use when body styling is needed for inline
        content.
      </DvBody>
    </div>
  </div>
</template>

<script setup lang="ts">
import DvBody from "../DvBody.vue";
import DvHeading from "../../DvHeading/DvHeading.vue";
</script>

<style scoped>
.stories-container,
.story-group {
  display: flex;
  flex-direction: column;
}

.stories-container {
  gap: 3rem;
}

.story-group {
  gap: 1rem;
}
</style>
