export const Graphs = {
  extends: "Flex",
  scope: {
    TIME_RANGES: [
      { label: "5m", value: 5 },
      { label: "15m", value: 15 },
      { label: "30m", value: 30 },
      { label: "1h", value: 60 },
      { label: "6h", value: 360 },
      { label: "12h", value: 720 },
      { label: "1d", value: 1440 },
      { label: "3d", value: 4320 },
      { label: "1w", value: 10080 },
    ],
    fetchMetrics: (el, s, timeRange) => {
      const networkName = (s.protocol || "").toLowerCase();
      const publicKey = s.public_key || "";

      if (!networkName || !publicKey) return;

      s.update({ metricsLoading: true });

      el.call(
        "apiFetch",
        "POST",
        "",
        {
          networkName,
          publicKey,
          timeRangeMinutes: timeRange || 5,
        },
        {
          route: "/api/metrics",
          headers: {
            "Content-Type": "application/json",
            "X-Format": "chartjs",
          },
        },
      )
        .then((data) => {
          if (data?.success) {
            s.update({ metricsData: data, metricsLoading: false });
          } else {
            s.update({ metricsLoading: false });
          }
        })
        .catch((err) => {
          console.error("Failed to fetch metrics:", err);
          s.update({ metricsLoading: false });
        });
    },
  },
  props: (el, s) => {
    // Fetch metrics once when protocol and public_key are available
    if (!el.__metricsFetched && s.protocol && s.public_key) {
      el.__metricsFetched = true;
      el.scope.fetchMetrics(el, s, s.timeRangeMinutes || 5);
    }

    return {
      gap: "A",
      flow: "y",
      padding: "A",
      round: "A",
      background: "black .3",
    };
  },

  on: {
    stateChanged: (el, s, changes) => {
      if (changes.timeRangeMinutes) {
        // Destroy existing charts before refetch
        el.queryAll("canvas").forEach((canvas) => {
          if (canvas.node.__chart) {
            canvas.node.__chart.destroy();
            canvas.node.__chart = null;
          }
        });
        el.scope.fetchMetrics(el, s, s.timeRangeMinutes);
      }
    },
  },

  Header: {
    extends: "Flex",
    flow: "x",
    flexAlign: "center space-between",
    gap: "A",
    margin: "0 0 Y 0",

    Title: {
      fontSize: "Z",
      fontWeight: "600",
      color: "caption",
      textTransform: "uppercase",
      text: "Metrics",
    },

    TimeRange: {
      extends: "Flex",
      flow: "x",
      gap: "X",
      flexWrap: "wrap",
      children: (el) => el.scope.TIME_RANGES,
      childrenAs: "state",
      childProps: (el, s) => ({
        tag: "button",
        padding: "X Y",
        round: "Y",
        border: "none",
        cursor: "pointer",
        fontSize: "Y1",
        text: s.label,
        background:
          (s.parent?.timeRangeMinutes || 5) === s.value
            ? "white .2"
            : "transparent",
        color:
          (s.parent?.timeRangeMinutes || 5) === s.value ? "white" : "caption",
        onClick: () => {
          s.parent.update({ timeRangeMinutes: s.value });
        },
      }),
    },
  },

  Loading: {
    if: (_, s) => s.metricsLoading,
    text: "Loading metrics...",
    color: "caption",
    fontSize: "Z",
  },

  NoData: {
    if: (_, s) => !s.metricsLoading && !s.metricsData?.charts,
    text: "No metrics data available",
    color: "caption",
    fontSize: "Z",
  },

  // Uptime grid - full width (first)
  UpChart: { order: "1" },

  // Row 1: Latest Block, Syncing, and Blocks To Sync
  Row1: {
    if: (_, s) => s.metricsData?.charts,
    extends: "Flex",
    flow: "x",
    gap: "A",
    order: "2",

    LatestBlockChart: { flex: "1" },
    SyncingChart: { flex: "1" },
    BlocksToSyncChart: { flex: "1" },
  },

  // Row 2: Peer Count and Net Listening
  Row2: {
    if: (_, s) => s.metricsData?.charts,
    extends: "Flex",
    flow: "x",
    gap: "A",
    order: "3",

    PeerCountChart: { flex: "1" },
    NetListeningChart: { flex: "1" },
  },
};
