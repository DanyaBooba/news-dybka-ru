const ShareTG = () => window.open(`https://telegram.me/share/url?url=${SpecialURL()}&text=${document.title}`, '_blank')
const ShareVK = () => window.open(`https://vk.com/share.php?url=${SpecialURL()}`, '_blank')
const ShareOK = () => window.open(`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${SpecialURL()}`, '_blank')
const ShareLink = () => navigator.clipboard.writeText(SpecialURL())

const SpecialURL = () => `https://news.dybka.ru${window.location.pathname}`
