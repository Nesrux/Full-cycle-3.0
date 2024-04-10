FROM golang:1.15
WORKDIR /server
COPY . .
RUN go build -o server .
CMD [ "./server"]
EXPOSE 8000