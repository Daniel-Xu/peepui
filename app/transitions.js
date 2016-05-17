export default function() {
  this.transition(
    this.fromRoute('auth.login'),
    this.toRoute('auth.register'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}

