#!/usr/bin/env bash
image_version=`date +%Y%m%d%H%M`;
# 关闭容器
docker stop ok-web-image || true;
# 删除容器
docker rm ok-web-image || true;
# 删除镜像
docker rmi --force $(docker images | grep ok-web | awk '{print $3}')
# docker rmi cool_service;
# 构建镜像
docker build -t ok-web:$image_version .;
# 查看镜像列表
docker images;
# 基于镜像, 构建一个容器
docker run -d --restart=always --name ok-web-image -p 3000:3000 ok-web:$image_version;
# 查看日志
docker logs ok-web-image;
#删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q)
# 对空间进行自动清理
docker system prune -a -f
