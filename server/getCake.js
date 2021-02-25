import cakesData from './Cakes.js'

export default function getPlayer() {
  return cakesData[Math.floor(Math.random() * cakesData.length)]
}
