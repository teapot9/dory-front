<script>
import messages from "@/languages/messages";

export default {
  computed: {
      toasterLabels() {
        return {
          labels: {
            success: messages[this.$i18n.locale].toaster.success,
            warning: messages[this.$i18n.locale].toaster.warning,
            alert: messages[this.$i18n.locale].toaster.error
          }
        }
      }
    }
}
</script>