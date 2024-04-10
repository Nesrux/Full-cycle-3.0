package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"
)

var startedAt = time.Now()

func main() {

	http.HandleFunc("/", Hello)
	http.HandleFunc("/configMap", configMap)
	http.HandleFunc("/secret", secret)
	http.HandleFunc("/helth", helth)
	http.ListenAndServe(":8000", nil)

}
func Hello(w http.ResponseWriter, r *http.Request) {
	name := os.Getenv("NAME")
	age := os.Getenv("AGE")
	w.Write([]byte("<h1>Hello Kubernets!!!</h1>"))
	fmt.Fprintf(w, "Olá eu sou %s minha idade é %s", name, age)
}
func configMap(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadFile("./myfamily/family.txt")
	if err != nil {
		log.Fatalf("Erro ao ler o arquivo: ", err)
	}
	fmt.Fprintf(w, "minha familia %s.", string(data))
}
func secret(w http.ResponseWriter, r *http.Request) {
	user := os.Getenv("USER")
	pass := os.Getenv("PASS")
	fmt.Fprintf(w, "USER : %s. -- PASS: %s", user, pass)
}
func helth(w http.ResponseWriter, r *http.Request) {
	duration := time.Since(startedAt)

	if duration.Seconds() < 10 || duration.Seconds() > 30{
		w.WriteHeader(500)
		w.Write([]byte(fmt.Sprintf("Duration: %v,", duration.Seconds())))
	} else {
		w.WriteHeader(200)
		w.Write([]byte("ok"))
	}
}
