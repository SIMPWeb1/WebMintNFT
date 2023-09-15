function copyAddress() {
    navigator.clipboard.writeText("0x61C1f120ba3Af0afb1C75DA11AA6d20C82b3BeA1")
}

function onLinkClick(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
    // will scroll to 4th h3 element
  }