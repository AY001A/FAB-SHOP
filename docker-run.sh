echo 'login to docker to pull and build image'
docker login -u $DOCKER_USER -p $DOCKER_P

export IMAGE_NAME='$DOCKER_REPO:cucumislushfrontend'
export CONTAINER_NAME='cucumislushfrontend'
echo 'any running container before'
docker stop $CONTAINER_NAME && docker container prune -f && docker image prune -f

echo 'pull down the latest repo'
docker pull "$IMAGE_NAME:$CONTAINER_NAME"

echo 'run the latest image as container'

docker run -d --name $CONTAINER_NAME -p 3200:3000 "$IMAGE_NAME:$CONTAINER_NAME"
