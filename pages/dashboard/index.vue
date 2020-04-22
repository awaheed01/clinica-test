<template>
  <section>
    <AppDashboardInfo/>
    <AppPendingList/>
  </section>
</template>
<script>
import AppDashboardInfo from '../../components/Dashboard/AppDashboardInfo'
import AppPendingList from '../../components/Dashboard/AppPendingList'
export default {
  components:{
    AppDashboardInfo,
    AppPendingList
  }
}
</script>