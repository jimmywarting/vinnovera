export async function configure(aurelia) {
  aurelia.use.basicConfiguration()
  await aurelia.start()
  aurelia.setRoot()
}
