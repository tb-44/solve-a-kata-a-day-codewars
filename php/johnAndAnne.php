<!-- John and his wife Ann have decided to go to Codewars.

On first day Ann will do one kata and John - he wants to know how it is working - 0 kata.

Let us call a(n) the number of katas done by Ann at day n. We have a(0) = 1 and in the same manner j(0) = 0 (or a(1) = 1 and j(1) = 0 for languages that have arrays with indices beginning at 1).

They have chosen the following rules:

On day n the number of katas done by Ann should be n minus the number of katas done by John at day t, t being equal to the number of katas done by Ann herself at day n - 1.

On day n the number of katas done by John should be n minus the number of katas done by Ann at day t, t being equal to the number of katas done by John himself at day n - 1.

Whoops! I think they need to lay out a little clearer exactly what there're getting themselves into! -->
<?php
function johnAnn($n)
{
    $johns = array(0);
    $anns = array(1);
    if ($n == 0) {
        return 0;
    }
    $i = 1;
    while ($i < $n) {
        $j = $johns[$i - 1];
        $a1 = $anns[$j];
        array_push($johns, $i - $a1);
        $a = $anns[$i - 1];
        $j1 = $johns[$a];
        array_push($anns, $i - $j1);
        $i++;
    }
    return array($anns, $johns);
}
function john($n)
{
    return johnAnn($n)[1];
}
function ann($n)
{
    return johnAnn($n)[0];
}
function sumJohn($n)
{
    return array_sum(johnAnn($n)[1]);
}
function sumAnn($n)
{
    return array_sum(johnAnn($n)[0]);
}
