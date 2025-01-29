package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"
	"syscall"

	pb "cosine.sh/ccode/workspace"
	"github.com/getsentry/sentry-go"
	"github.com/joho/godotenv"
	"go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"github.com/google/uuid"
)

const (
	port = ":50051"
)

var (
	tracer = otel.Tracer("cosine.sh/ccode")
)

func main() {
	if err := godotenv.Load(); err != nil {