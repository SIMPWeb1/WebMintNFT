function copyAddress() {
    navigator.clipboard.writeText("0x96EdaF14f582a68907101a58D37D7C38EA0878f1")
}

function onLinkClick(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
    // will scroll to 4th h3 element
  }