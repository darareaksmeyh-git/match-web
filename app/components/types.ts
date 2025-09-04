export type CardProps = {
  id: string,
  teamA: string,
  teamB: string,
  img: string,
  title: string,
  live?: boolean,
  button?: 'noti' | 'mute',
}