# What does this component do?
This component displays a timer that starts at 0 seconds and increments by 1 second each second. It has buttons to start/pause and reset the timer.

# How does the useState hook work in this component?
The useState hook is used to add state to functional components. It returns state variables (seconds and isActive) and functions (setSeconds and setIsActive) to update those state variables. seconds represents the current number of seconds elapsed, and isActive indicates whether the timer is currently running or paused.

# Explain how the useEffect hook works in this component.
The useEffect hook is used to perform side effects in functional components. In this component, it sets up an interval that increments the seconds state by 1 every second if the timer is active. It also cleans up the interval when the component is unmounted or when the isActive state changes.

# What happens when you click the "Start" or "Pause" button?
When the "Start" button is clicked, the toggleTimer function is called, which toggles the isActive state to true, starting the timer. When the "Pause" button is clicked, the toggleTimer function is called, which toggles the isActive state to false, pausing the timer.

# How would you modify this component to display minutes and hours in addition to seconds?
You can calculate minutes and hours based on the total number of seconds and display them alongside seconds.

# What happens when you click the "Reset" button?
When the "Reset" button is clicked, the resetTimer function is called, which resets the seconds state to 0 and sets the isActive state to false, effectively stopping the timer.