# a set of handy (optional) aliases 

alias dc='docker-compose'
alias dps='docker ps'

alias logall='dc logs --tail=all -f'

alias qdown='docker stop quasar && docker rm quasar'
alias buildup='dc build && qdown && dc up -d'

dx() {
  local OPTIND project
  while getopts ":rqsm" option; do
    case $option in
      r) project=reverse_proxy ;;
      q) project=quasar ;;
      s) project=strapi ;;
      m) project=strapi_mongo ;;
      ?) echo "invalid option: $OPTARG"; return 1 ;;
    esac
  done
  docker exec -it ${project} /bin/bash
}

log() {
  local OPTIND project
  while getopts ":rqsm" option; do
    case $option in
      r) project=reverse_proxy ;;
      q) project=quasar ;;
      s) project=strapi ;;
      m) project=strapi_mongo ;;
      ?) echo "invalid option: $OPTARG"; return 1 ;;
    esac
  done
  dc logs --tail=all -f | grep ${project}
}

go() {
  local OPTIND project
  while getopts ":sq" option; do
    case $option in
      s) project=strapi ;;
      q) project=quasar ;;
      ?) echo "invalid option: $OPTARG"; return 1 ;;
    esac
  done
  cd ~/services/${project}
}