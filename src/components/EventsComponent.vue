<template>
  <section class="events-container">
    <div class="headline-container">
      <h2>Events:</h2>
    </div>
    <div class="events-information">
      <div class="column">
        <h2 data-text="Create date:" class="create-event">
          <span class="event-date">{{ formatDate(eventData.registered.timestamp) }}</span>
        </h2>
        <h2 data-text="Update date:" class="update-event">
          <span class="event-date">{{ formatDate(eventData.updated.timestamp) }}</span>
        </h2>
        <h2 data-text="Transfer date:" class="transfer-event">
          <span class="event-date">{{ formatDate(eventData.transferred.timestamp) }}</span>
        </h2>
        <h2 data-text="Delete date:"></h2>
        <br />
      </div>
      <div class="column">
        <h2 class="registrar-h2">
          Registrar: <span class="registrar blue-text">{{ eventData.registered.registrar_handle }}</span>
        </h2>
        <h2 class="registrar-h2">
          Registrar: <span class="registrar blue-text">{{ eventData.updated.registrar_handle }}</span>
        </h2>
        <h2 class="registrar-h2">
          Registrar: <span class="registrar blue-text">{{ eventData.transferred.registrar_handle }}</span>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { getEventData, formatEventData, formatDate } from '../utils/utils'

export default {
  data() {
    return {
      eventData: getEventData(),
      formattedEvents: formatEventData(getEventData())
    }
  },
  methods: {
    formatDate(date) {
      return formatDate(date)
    }
  }
}
</script>
