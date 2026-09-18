import sys
import time

STEPS = [
    "Booting Hello Agent...",
    "Loading configuration (none needed)...",
    "Agent ready.",
    "Hello from Maava! This agent has no external dependencies,",
    "so it exists to prove the install -> launch pipeline works end to end.",
]


def main() -> int:
    for line in STEPS:
        print(line, flush=True)
        time.sleep(0.3)
    return 0


if __name__ == "__main__":
    sys.exit(main())
