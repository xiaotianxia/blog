<template>
  <Layout>
    <CarbonAds slot="sidebar-top"/>
    <BuySellAds slot="page-bottom"/>
  </Layout>
</template>

<script>
import Layout from '@default-theme/Layout.vue'
import CarbonAds from './CarbonAds.vue'
import BuySellAds from './BuySellAds.vue'

export default {
  components: {
    Layout,
    CarbonAds,
    BuySellAds
  }
}
</script>
