package main

import "fmt"

func main() {
	c := Somar(5, 5)
	fmt.Printf("A Soma de A + B é %d", c)
}
func Somar(a, b int) int {
	return a + b
}
