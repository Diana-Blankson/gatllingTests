var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "120",
        "ok": "120",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "543",
        "ok": "543",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1492",
        "ok": "1492",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles1": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "percentiles2": {
        "total": "662",
        "ok": "662",
        "ko": "-"
    },
    "percentiles3": {
        "total": "737",
        "ok": "737",
        "ko": "-"
    },
    "percentiles4": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 115,
    "percentage": 95.83333333333334
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 3.3333333333333335
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 0.8333333333333334
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.97",
        "ok": "1.97",
        "ko": "-"
    }
},
contents: {
"req_request-1--1597067584": {
        type: "REQUEST",
        name: "Request 1",
path: "Request 1",
pathFormatted: "req_request-1--1597067584",
stats: {
    "name": "Request 1",
    "numberOfRequests": {
        "total": "120",
        "ok": "120",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "543",
        "ok": "543",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1492",
        "ok": "1492",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles1": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "percentiles2": {
        "total": "662",
        "ok": "662",
        "ko": "-"
    },
    "percentiles3": {
        "total": "737",
        "ok": "737",
        "ko": "-"
    },
    "percentiles4": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 115,
    "percentage": 95.83333333333334
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 3.3333333333333335
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 0.8333333333333334
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.97",
        "ok": "1.97",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
