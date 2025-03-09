import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () =>{
    const showPrayerText = ref(true)
    const showMysterySummaries = ref(true)
    const showOpeningPrayers = ref(true)
    const showClosingPrayers = ref(true)
    const showFocusInsights = ref(true)
    const showArt = ref(true)
    const mysterySummaryStyle = ref('Scriptural')
    const focusInsightStyle = ref('Scriptural')
    const artStyle = ref('My Rosary Life') // renaissance, stain glass, etc
    const optionalPrayers = ref([])

    return {
        showPrayerText,
        showMysterySummaries,
        showOpeningPrayers,
        showClosingPrayers,
        mysterySummaryStyle,
        showFocusInsights,
        showArt,
        artStyle,
        focusInsightStyle,
        optionalPrayers
    }
})