<script setup lang="ts">
definePageMeta({
  layout: 'chaplet'
});

const user = useUserStore()
const prayer = usePrayerStore()

const replacePrayers = ref(false)
const includeFullAngelPrayers = ref(true)

const intersessions = [
    'By the intercession of St. Michael and the celestial Choir of Seraphim may the Lord make us worthy to burn with the fire of perfect charity. Amen.',
    'By the intercession of St. Michael and the celestial Choir of Cherubim may the Lord grant us the grace to leave the ways of sin and run in the paths of Christian perfection. Amen.',
    'By the intercession of St. Michael and the celestial Choir of Thrones may the Lord pour into our hearts a true and sincere spirit of humility. Amen.',
    'By the intercession of St. Michael and the celestial Choir of Dominations may the Lord give us grace to govern our senses and overcome any unruly passions. Amen.',
    'Our Father, who art in heaven hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
    'By the intercession of St. Michael and the celestial Choir of Virtues may the Lord preserve us from evil and falling into temptation. Amen.',
    'By the intercession of St. Michael and the celestial Choir of Powers may the Lord protect our souls against the snares and temptations of the devil. Amen.',
    'By the intercession of St. Michael and the celestial Choir of Principalities may God fill our souls with a true spirit of obedience. Amen.',
    'By the intercession of St. Michael and the celestial Choir of Archangels may the Lord give us perseverance in faith and in all good works in order that we may attain the glory of Heaven. Amen.',
    'By the intercession of St. Michael and the celestial Choir of Angels may the Lord grant us to be protected by them in this mortal life and conducted in the life to come to Heaven. Amen.'
]
</script>

<template>
  <ChapletPanel>
    <template v-slot:moreOptions>
      <UFormGroup>
        <UCheckbox v-model="replacePrayers" name="replacePrayers" label="Replace Our Father and Hail Mary with St. Michael and Guardian Angel prayers" />
        <UCheckbox v-model="includeFullAngelPrayers" name="includeFullAngelPrayers" label="Include Full Angel Prayers for St. Michael, St. Gabriel, St. Raphael, and Guardian Angel" />
      </UFormGroup>
    </template>

    <template v-slot:prayerSet>
      <!-- Opening Prayers -->
      <div>
        <p>Make the <span class="prayer-name">Sign of the Cross</span></p>

        <p v-if="user.showPrayerText" class="prayer-text">
          {{ prayer.signOfTheCross }}
        </p>

        <p>O God, come to my assistance. O Lord, make haste to help me.</p>

        <p>Say the <span class="prayer-name">Glory Be</span></p>

        <p v-if="user.showPrayerText" class="prayer-text">
          {{ prayer.gloryBe }}
        </p>
      </div>

      <!-- Intersession Prayers -->
      <div v-for="(intersession, index) in intersessions" :key="'intersession' + index">
        <p>{{intersession}}</p>

        <div v-if="replacePrayers">
          <p>Say the <span class="prayer-name">St. Michael Prayer</span></p>

          <p v-if="user.showPrayerText" class="prayer-text">
            {{ prayer.stMichaelPrayer }}
          </p>

          <p>Say three <span class="prayer-name">Guardian Angel (Short) Prayers</span></p>

          <p v-if="user.showPrayerText" class="prayer-text">
            {{ prayer.guardianAngelShortPrayer }}
          </p>
        </div>

        <div v-else>
          <p>Say the <span class="prayer-name">Our Father</span></p>

          <p v-if="user.showPrayerText" class="prayer-text">
            {{ prayer.ourFather }}
          </p>
        </div>
      </div>

      <!-- Angel Prayers -->
      <div>
        <p>Pray with <span class="prayer-name">St. Michael, The Archangel</span></p>

        <p>{{ prayer.stMichaelPrayer }}</p>

        <div v-if="replacePrayers">
        </div>

        <div v-else>
          <p>Say the <span class="prayer-name">Our Father</span></p>

          <p v-if="user.showPrayerText" class="prayer-text">
            {{ prayer.ourFather }}
          </p>
        </div>

        <p>Pray with <span class="prayer-name">St. Gabriel, The Archangel</span></p>

        <p>{{ prayer.stGabrielPrayer }}</p>

        <div v-if="replacePrayers">
          <p>Say the <span class="prayer-name">St. Michael Prayer</span></p>

          <p v-if="user.showPrayerText" class="prayer-text">
            {{ prayer.stMichaelPrayer }}
          </p>
        </div>

        <div v-else>
          <p>Say the <span class="prayer-name">Our Father</span></p>

          <p v-if="user.showPrayerText" class="prayer-text">
            {{ prayer.ourFather }}
          </p>
        </div>

        <p>Pray with <span class="prayer-name">St. Raphael, The Archangel</span></p>

        <p>{{ prayer.stRaphaelPrayer }}</p>

        <div v-if="replacePrayers">
          <p>Say the <span class="prayer-name">St. Michael Prayer</span></p>

          <p v-if="user.showPrayerText" class="prayer-text">
            {{ prayer.stMichaelPrayer }}
          </p>
        </div>

        <div v-else>
          <p>Say the <span class="prayer-name">Our Father</span></p>

          <p v-if="user.showPrayerText" class="prayer-text">
            {{ prayer.ourFather }}
          </p>
        </div>

        <p>Pray with your <span class="prayer-name">Guardian Angel</span></p>

        <p>{{ prayer.guardianAngelLongPrayer }}</p>
        <p>{{ prayer.guardianAngelShortPrayer }}</p>

        <div v-if="replacePrayers">
          <p>Say the <span class="prayer-name">St. Michael Prayer</span></p>

          <p v-if="user.showPrayerText" class="prayer-text">
            {{ prayer.stMichaelPrayer }}
          </p>
        </div>

        <div v-else>
          <p>Say the <span class="prayer-name">Our Father</span></p>

          <p v-if="user.showPrayerText" class="prayer-text">
            {{ prayer.ourFather }}
          </p>
        </div>
      </div>

      <!-- Closing Prayers -->
      <div>
        <p>O glorious prince St. Michael, chief and commander of the heavenly hosts, guardian of souls, vanquisher of rebel spirits, servant in the house of the Divine King and our admirable conductor, you who shine with excellence and superhuman virtue deliver us from all evil, who turn to you with confidence and enable us by your gracious protection to serve God more and more faithfully every day.</p>
        <p>Pray for us, O glorious St. Michael, Prince of the Church of Jesus Christ, that we may be made worthy of His promises.</p>
        <p>Almighty and Everlasting God, Who, by a prodigy of goodness and a merciful desire for the salvation of all men, has appointed the most glorious Archangel St. Michael Prince of Your Church, make us worthy, we ask You, to be delivered from all our enemies, that none of them may harass us at the hour of death, but that we may be conducted by him into Your Presence. This we ask through the merits of Jesus Christ Our Lord. Amen.</p>

        <p>Make the <span class="prayer-name">Sign of the Cross</span></p>

        <p v-if="user.showPrayerText" class="prayer-text">
          {{ prayer.signOfTheCross }}
        </p>
      </div>
    </template>
  </ChapletPanel>
</template>

<style scoped>

</style>