FROM alpine:latest

RUN apk add python3 python3-dev musl-dev libffi-dev gcc

COPY ./requirements.txt /
RUN pip3 install -r requirements.txt

ENV FLASK_ENV=development

EXPOSE 5000
WORKDIR /srv
CMD ["flask", "run", "-h", "0.0.0.0"]
