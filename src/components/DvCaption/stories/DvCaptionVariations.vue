<template>
  <div class="stories-container">
    <div class="story-group">
      <DvHeading as="h3">Default Caption</DvHeading>
      <DvCaption>This is standard caption text for secondary information.</DvCaption>
    </div>

    <div class="story-group">
      <DvHeading as="h3">As Different Elements</DvHeading>
      <div class="element-variations">
        <div>
          <span class="label">span:</span>
          <DvCaption as="span">Inline caption element</DvCaption>
        </div>
        <div>
          <span class="label">p:</span>
          <DvCaption as="p">Paragraph caption element</DvCaption>
        </div>
        <div>
          <span class="label">time:</span>
          <DvCaption as="time" datetime="2026-04-14">April 14, 2026</DvCaption>
        </div>
      </div>
    </div>

    <div class="story-group">
      <DvHeading as="h3">In Context</DvHeading>
      <div class="context-example">
        <DvHeading as="h4">Article Title</DvHeading>
        <DvCaption as="p">By Author Name • <DvCaption as="time" datetime="2026-04-09">5 days ago</DvCaption> • 8 min
          read</DvCaption>
        <DvBody>
          This is the beginning of an article. Captions provide context about when it was published and other relevant
          metadata that helps users understand the content.
        </DvBody>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DvCaption from "../DvCaption.vue";
import DvHeading from "../../DvHeading/DvHeading.vue";
import DvBody from "../../DvBody/DvBody.vue";
</script>

<style scoped>
.stories-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.story-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.element-variations {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--davinci-semantic-surface-secondary);
  border-radius: 0.5rem;
}

.element-variations>div {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.label {
  min-width: 60px;
  font-weight: 500;
  font-size: 0.875rem;
}

.context-example {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  background-color: var(--davinci-semantic-surface-secondary);
  border-left: 3px solid var(--davinci-semantic-border-default);
  border-radius: 0.25rem;
}
</style>
