<template>
  <div class="stories-container">
    <div class="use-case">
      <DvHeading as="h3">Helper Text</DvHeading>
      <div class="example">
        <DvCaption as="span">Must be at least 8 characters. Include numbers and symbols.</DvCaption>
      </div>
    </div>

    <div class="use-case">
      <DvHeading as="h3">Timestamp & Metadata</DvHeading>
      <div class="example">
        <DvBody>This is a great feature that solves real problems.</DvBody>
        <DvCaption as="span">Published by Sarah Chen • <DvCaption as="time" datetime="2026-04-12">2 days ago</DvCaption>
          • 4 min read</DvCaption>
      </div>
    </div>

    <div class="use-case">
      <DvHeading as="h3">Caption Paragraph</DvHeading>
      <div class="example">
        <DvBody>You agree to our terms and conditions.</DvBody>
        <DvCaption as="p">
          By continuing, you accept our privacy policy and terms of service. Your data is encrypted and secure.
        </DvCaption>
      </div>
    </div>

    <div class="use-case">
      <DvHeading as="h3">Published Date</DvHeading>
      <div class="example badge-group">
        <DvCaption as="time" datetime="2025-03-20">March 20, 2025</DvCaption>
        <DvCaption as="time" datetime="2026-01-15">January 15, 2026</DvCaption>
        <DvCaption as="time" datetime="2026-04-14">Today</DvCaption>
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

.use-case {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.example {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--davinci-semantic-surface-secondary);
  border-radius: 0.5rem;
}

input {
  padding: 0.5rem;
  border: 1px solid var(--davinci-semantic-border-default);
  border-radius: 0.25rem;
  font-family: var(--davinci-text-font-main);
}

.badge-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background-color: var(--davinci-semantic-surface-tertiary);
  border-radius: 0.25rem;
  border: 1px solid var(--davinci-semantic-border-subtle);
}
</style>
