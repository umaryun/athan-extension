// Prayer Times (in 24-hour format).
const prayerTimes = {
    fajr: '05:34',
    dhuhr: '12:42',
    asr: '16:02',
    maghrib: '18:41',
    isha: '19:53'
  };
  
  // Get current time in Abuja
  const getTimeInAbuja = () => {
    const now = new Date();
    const utcOffset = 1; // UTC+1 for Abuja (Nigeria)
    const offsetInMinutes = now.getTimezoneOffset() + utcOffset * 60;
    const newTimestamp = now.getTime() + offsetInMinutes * 60 * 1000;
    return new Date(newTimestamp);
  };
  
  // Check if it's time for prayer
  const checkPrayerTime = () => {
    const timeInAbuja = getTimeInAbuja();
    const currentHour = timeInAbuja.getHours();
    const currentMinute = timeInAbuja.getMinutes();
    const currentTime = `${currentHour}:${currentMinute}`;
  
    if (currentTime === prayerTimes.fajr) {
      // Create pop-up message
      alert('It\'s time to pray Fajr');
    }
    if( currentTime === prayerTimes.dhuhr) {
      alert('It\'s time to pray Dhuhr');
    }
    if( currentTime === prayerTimes.asr) {
      alert('It\'s time to pray Asr');
    }
    if(currentTime === prayerTimes.maghrib) {
      alert('It\'s time to pray Maghrib');
    }
    if( currentTime === prayerTimes.isha) {
      alert('It\'s time to pray Isha');
    }
  };
  
  // Check for prayer time every minute
  setInterval(checkPrayerTime, 60000);
  