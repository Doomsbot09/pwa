<script setup lang="ts">
    import { ref } from 'vue'
    import { useAuthStore } from "../../../store/auth"

    const required = (val: any) => !!val || 'This field is required'
    const authStore = useAuthStore()
    const firstname = ref('')
    const lastname = ref('')
    const grade = ref(null)
    const selectedSection = ref(null)
    const sections = [
      {
        grade: 4,
        sections: ['Planet', 'Galaxy', 'Meteor']
      },
      {
        grade: 5,
        sections: ['Pearl', 'Sapphire', 'Topaz']
      },
      {
        grade: 6,
        sections: ['Atis', 'Guava']
      }
    ]

    const gradeOption = computed(() => sections.map((item) => item.grade))
    const sectionOption = computed(() => sections.find((item) => item.grade === grade.value ))

    const onSubmit = () => {
      const payload = {
        firstname: firstname.value,
        lastname: lastname.value,
        grade: grade.value,
        section: selectedSection.value
      }

      authStore.saveUserDetails(payload)
    }
</script>

<template>
  <div class="q-pa-md" style="max-width: 400px; width: 100%;">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="firstname"
        label="First Name"
        :rules="[required]"
      />

      <q-input
        filled
        v-model="lastname"
        label="Last Name"
        :rules="[required]"
      />

      <q-select
        filled
        v-model="grade"
        :options="gradeOption"
        @update:model-value="selectedSection = null"
        label="Grade"
        emit-value
        map-options
        :rules="[required]"
      />

      <q-select
        filled
        v-model="selectedSection"
        :options="sectionOption?.sections"
        label="Section"
        emit-value
        map-options
        :rules="[required]"
      />

      <div class="form-bottom">
        <q-btn
          label="Submit"
          type="submit"
          color="primary"
          class="full-width"
        />
      </div>
    </q-form>
  </div>
</template>
