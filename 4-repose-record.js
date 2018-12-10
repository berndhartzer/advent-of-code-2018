const reposeRecordPartOne = (input) => {
  const parsed = input.map(x => {
    const id = x.match(/(?<=#)\d+/);
    return {
      time: new Date(x.match(/\[(.*?)\]/)[1]),
      asleep: x.match(/(asleep)/) ? true : false,
      begins: x.match(/(begins)/) ? true : false,
      id: id ? id[0] : null,
    };
  }).sort((a, b) => a.time - b.time);

  const guardLogs = parsed.reduce((a, obs) => {
    let log = {};
    const guard = obs.id || a.currentId;
    log[guard] = typeof a[guard] !== 'undefined' ? { ...a[guard] } : {};

    if (obs.begins) {
      log.currentId = obs.id;
      if (typeof a[guard] !== 'undefined' && typeof a[guard].awake !== 'undefined') {
        log[guard].awake = [...a[guard].awake, obs.time ]
      } else {
        log[guard] = {};
        log[guard].awake = [obs.time]
      }
    }

    if (obs.asleep) {
      if (typeof a[guard] !== 'undefined' && typeof a[guard].asleep !== 'undefined') {
        log[guard].asleep = [...a[guard].asleep, obs.time ]
      } else {
        log[guard].asleep = [obs.time]
      }
    }

    if (!obs.begins && !obs.asleep) {
      const asleepSince = a[guard].asleep[a[guard].asleep.length - 1];
      const minsAsleepFor = (((obs.time - asleepSince) / 60) / 1000)

      const allAsleepMinutes = [...Array(minsAsleepFor - 1).keys()].map(x => {
        const base = new Date(asleepSince)
        return new Date(base.setUTCMinutes(base.getUTCMinutes() + (x + 1)));
      });

      log[guard].asleep = [...a[guard].asleep, ...allAsleepMinutes];
    }

    return { ...a, ...log };
  }, {});

  const guardWithMostSleep = Object.keys(guardLogs).reduce((a, g) => {
    if (typeof a !== 'undefined' && typeof guardLogs[a].asleep !== 'undefined' && typeof guardLogs[g].asleep !== 'undefined') {
      return guardLogs[a].asleep.length > guardLogs[g].asleep.length ? a : g;
    }
    return a;
  });

  const minutesTally = guardLogs[guardWithMostSleep].asleep.reduce((a, time) => {
    if (typeof a[time.getUTCMinutes()] !== 'undefined') {
      return { ...a, [time.getUTCMinutes()]: a[time.getUTCMinutes()] + 1 }
    }
    return { ...a, [time.getUTCMinutes()]: 1 }
  }, {});

  const minuteMostAsleep = Object.keys(minutesTally).reduce((a, minute) => {
    return Number(minutesTally[minute]) > Number(minutesTally[a]) ? minute : a;
  });

  return guardWithMostSleep * Number(minuteMostAsleep);
};

const reposeRecordPartTwo = (input) => {
  const parsed = input.map(x => {
    const id = x.match(/(?<=#)\d+/);
    return {
      time: new Date(x.match(/\[(.*?)\]/)[1]),
      asleep: x.match(/(asleep)/) ? true : false,
      begins: x.match(/(begins)/) ? true : false,
      id: id ? id[0] : null,
    };
  }).sort((a, b) => a.time - b.time);

  const guardLogs = parsed.reduce((a, obs) => {
    let log = {};
    const guard = obs.id || a.currentId;
    log[guard] = typeof a[guard] !== 'undefined' ? { ...a[guard] } : {};

    if (obs.begins) {
      log.currentId = obs.id;
      if (typeof a[guard] !== 'undefined' && typeof a[guard].awake !== 'undefined') {
        log[guard].awake = [...a[guard].awake, obs.time ]
      } else {
        log[guard] = {};
        log[guard].awake = [obs.time]
      }
    }

    if (obs.asleep) {
      if (typeof a[guard] !== 'undefined' && typeof a[guard].asleep !== 'undefined') {
        log[guard].asleep = [...a[guard].asleep, obs.time ]
      } else {
        log[guard].asleep = [obs.time]
      }
    }

    if (!obs.begins && !obs.asleep) {
      const asleepSince = a[guard].asleep[a[guard].asleep.length - 1];
      const minsAsleepFor = (((obs.time - asleepSince) / 60) / 1000)

      const allAsleepMinutes = [...Array(minsAsleepFor - 1).keys()].map(x => {
        const base = new Date(asleepSince)
        return new Date(base.setUTCMinutes(base.getUTCMinutes() + (x + 1)));
      });

      log[guard].asleep = [...a[guard].asleep, ...allAsleepMinutes];
    }

    return { ...a, ...log };
  }, {});

  const allGuardsMinuteTallies = Object.keys(guardLogs).reduce((a, g) => {
    if (typeof guardLogs[g].asleep !== 'undefined') {
      return {
        ...a,
        [g]: guardLogs[g].asleep.reduce((b, time) => {
          if (typeof b[time.getUTCMinutes()] !== 'undefined') {
            return { ...b, [time.getUTCMinutes()]: b[time.getUTCMinutes()] + 1 }
          }
          return { ...b, [time.getUTCMinutes()]: 1 }
        }, {})
      }
    }
    return a;
  }, {});

  const guardAndMinute = Object.keys(allGuardsMinuteTallies).reduce((a, g) => {
    const minuteMostSlept = Object.keys(allGuardsMinuteTallies[g]).reduce((b, minute) => {
      return Number(allGuardsMinuteTallies[g][minute]) > Number(allGuardsMinuteTallies[g][b]) ? minute : b;
    });

    const currentGuard = Object.keys(a)[0];
    const currentMinute = a[Object.keys(a)[0]];

    if (!currentGuard || !currentMinute) return { [g]: minuteMostSlept }

    if (Number(allGuardsMinuteTallies[g][minuteMostSlept]) > Number(allGuardsMinuteTallies[currentGuard][currentMinute])) {
      return { [g]: minuteMostSlept }
    }

    return a;
  }, {});

  return Number(Object.keys(guardAndMinute)[0]) * Number(guardAndMinute[Object.keys(guardAndMinute)[0]]);
};

module.exports = {
  reposeRecordPartOne,
  reposeRecordPartTwo,
};
