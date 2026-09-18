from pipelines.run_daily import process_results


def test_process_results_smoke() -> None:
    process_results()
